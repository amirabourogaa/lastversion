import React from 'react'
import { View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserImg from '../../images/user.png'

export default function EditProfileUserImg({ sourceImg }) {
    if(sourceImg && sourceImg.length > 0){
        return(
            <ImageBackground
                source={{
                    uri: sourceImg,
                }}
                style={{ height: 130, width: 130 }}
                imageStyle={{ borderRadius: 130 }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#00000030",
                        borderRadius: 130
                    }}
                >
                    <Icon
                        name="camera"
                        size={35}
                        color="#FFF"
                        style={{
                            opacity: 0.7,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                    />
                </View>
            </ImageBackground>
        )
    }
    return (
        <ImageBackground
            source={UserImg}
            style={{height: 130, width: 130}}
            imageStyle={{ borderRadius: 130 }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#00000000",
                    borderRadius: 130
                }}
            >
                <Icon
                    name="camera"
                    size={35}
                    color="#FFF"
                    style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                    }}
                />
            </View>
        </ImageBackground>
    )
}
