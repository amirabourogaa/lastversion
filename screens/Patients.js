import React, { PureComponent } from 'react'
import { View, ActivityIndicator, FlatList, Pressable, Text } from 'react-native'

import { Avatar, List } from 'react-native-paper';
import { connect } from 'react-redux'
import { FetchUsers }  from '../redux/actions'

const User = ({ firstName, lastName, sourceImg = "https://icon-library.com/images/user-profile-icon/user-profile-icon-12.jpg", email, navigation, address, num }) => {
    return(
        <Pressable onPress={() => { navigation.navigate('Single User', { firstName, lastName, sourceImg, email, address, num }) }} android_ripple={{ color: '#CCC' }} style={{borderBottomWidth: 0.5, borderBottomColor: "#CCC" }} >
            <List.Item
                titleStyle={{marginTop: 0}}
                title={`${firstName} ${lastName}`}
                description={email}
                left={props => <Avatar.Image style={{backgroundColor: "#00000000", marginTop: 10, marginRight: 10}} source={{uri: sourceImg}} size={35}  />}
            />
        </Pressable>
    )
}

export class Patients extends PureComponent {
    componentDidMount(){
        this.props.FetchUsers()
    }

    keyExtractor = (_, index) => index.toString()

    renderItem = ({ item }) => {
        return <User {...item} navigation={this.props.navigation} />
    }

    render() {
        const{ users } = this.props.usersState

        return (
            <View style={{ backgroundColor: "#FFF", elevation: 3, margin: 10, marginTop: 30, borderRadius: 10, }}>
                <FlatList 
                    data={users}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    usersState: state.usersState,
})

export default connect(mapStateToProps, { FetchUsers })(Patients)


    /*
  






  
    */