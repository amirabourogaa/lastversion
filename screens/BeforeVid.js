import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export class BeforeVid extends PureComponent {
    render() {
        return (
            <View style = {{flex : 1, alignItems : 'center'}}>
                <Text 
                style = {{marginTop :20, fontSize : 22 , marginBottom: 20, padding : 20, fontWeight : 'bold'}}
                >Préparez vous 
                </Text>
               
                <Image
                style = {{width : '80%' , height : '50%', marginBottom : 20}}
                source={require('../assets/images/vid.gif')}
                />
                <View> 
                <TouchableRipple onPress={() => {this.props.navigation.navigate("Videos")}}>
                            <View style={styles.menuItem}>
                            <Icon name="video-3d-variant" color="#FF6347" size={25}/>
                                <Text style={styles.menuItemText}>Phase 1 </Text>
                            </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {this.props.navigation.navigate("Videos")}}>
                            <View style={styles.menuItem}>
                            <Icon name="video-3d-variant" color="#FF6347" size={25}/>
                                <Text style={styles.menuItemText}>Phase 2</Text>
                            </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {this.props.navigation.navigate("Videos")}}>
                            <View style={styles.menuItem}>
                            <Icon name="video-3d-variant" color="#FF6347" size={25}/>
                                <Text style={styles.menuItemText}>Phase 3</Text>
                            </View>
                </TouchableRipple>
                        
                        
                </View>
            </View>
        )
    }
}

export default BeforeVid
const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 26,
  }
})