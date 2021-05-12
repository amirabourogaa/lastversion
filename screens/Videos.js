import React, { Component } from 'react'
import { ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Text, View, SafeAreaView,} from 'react-native'
import moment from 'moment'
import { Video } from 'expo-av'
import Icon from 'react-native-vector-icons/Fontisto'
import bgImg from '../images/bgvideo.jpg'
import { TouchableRipple} from 'react-native-paper'


function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())},</Text>
      <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
function Lap({ number, interval, fastest, slowest }) {
  const lapStyle = [
    styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest,
  ]
  return (
    <View style={styles.lap}>
      <Text style={lapStyle}>Lap {number}</Text>
      <Timer style={[lapStyle, styles.lapTimer]} interval={interval}/>
    </View>
  )
}

function LapsTable({ laps, timer }) {
  const finishedLaps = laps.slice(1)
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  if (finishedLaps.length >= 2) {
    finishedLaps.forEach(lap => {
      if (lap < min) min = lap
      if (lap > max) max = lap
    })
  }
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap
          number={laps.length - index}
          key={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
          fastest={lap === min}
          slowest={lap === max}
        />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}
export default class Videos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  
  lap = () => {
    const timestamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    })
  }

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    })
  }
  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    })
  }
  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  render() {
    const { now, start, laps } = this.state
    const timer = now - start
    return (
        <SafeAreaView>
          <ScrollView>
            <ImageBackground blurRadius={2} style={styles.backgroundContainer} source={bgImg} >
              <View style={styles.container}>
                  <Video
                    source={require('../assets/videos/video1.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    useNativeControls
                    resizeMode="cover"
                    style={{ width: 300, height: 300 , marginBottom: 16}}
                  /> 
                  <Icon name="stopwatch" color='green' size={50}/>
                <Timer
                  interval={laps.reduce((total, curr) => total + curr, 0) + timer}
                  style={styles.timer}
                />
                {laps.length === 0 && (
                  <ButtonsRow>
                    <RoundButton
                     title='Lap'
                      color='#8B8B90'
                      background='#151515'
                      disabled
                    />
                    <RoundButton
                      title='Start'
                      color='#50D167'
                      background='#1B361F'
                      onPress={this.start}
                    />
                  </ButtonsRow>
                )}
                {start > 0 && (
                  <ButtonsRow>
                    <RoundButton
                      title='Lap'
                      color='#FFFFFF'
                      background='#3D3D3D'
                      onPress={this.lap}
                    />
                    <RoundButton
                      title='Stop'
                      color='#E33935'
                      background='#3C1715'
                      onPress={this.stop}
                    />
                  </ButtonsRow>
                )}
                {laps.length > 0 && start === 0 && (
                  <ButtonsRow>
                    <RoundButton
                      title='Reset'
                      color='#FFFFFF'
                      background='#3D3D3D'
                      onPress={this.reset}
                    />
                    <RoundButton
                      title='Start'
                      color='#50D167'
                      background='#1B361F'
                      onPress={this.resume}
                    />
                    
                  </ButtonsRow>
                )}
                <LapsTable laps={laps} timer={timer}/>
              </View>
              <TouchableRipple onPress={() => {this.props.navigation.navigate("Preview")}}>
                                <View style={{ width:300,marginLeft: 20,borderRadius : 80, alignItems : 'center', justifyContent :'center',height: 60,  backgroundColor: 'white', marginBottom : 20, flexDirection:'row'}}>
                                    
                                <Text style={{fontSize: 20,color: '#FF6347', fontWeight:'bold' }}>Envoyer Mon Bilan</Text>
                                </View>
                            </TouchableRipple>
            </ImageBackground>
          </ScrollView>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  timer: {
    color: '#145A32',
    fontSize: 76,
    fontWeight: '200',
    width: 110,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  lapText: {
    color: '#145A32',
    fontSize: 18,
  },
  lapTimer: {
    width: 30,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  fastest: {
    color: '#4BC05F',
  },
  slowest: {
    color: '#CC3531',
  },
  timerContainer: {
    flexDirection: 'row',
    marginLeft: 10
  },
  backgroundContainer: {
        flex : 1,
        alignItems:'center',
        overlayColor: 'black'
    }

})