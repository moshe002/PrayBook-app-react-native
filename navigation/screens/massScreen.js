import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Linking, Image, Pressable } from 'react-native'

import Header from '../components/Header'

const MassScreen = ({ navigation }) => {

    const [video, setVideo] = useState([])

    useEffect(() => {   
        getVideos()
    }, []);

    const getVideos = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCKUsvn9QGIwiX8fjCNmetWA&maxResults=2&q=live%20mass&key=AIzaSyDWV26jvrvKzoLMky6RLHJS8xELSvONIj8`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.items)
            setVideo(data.items)
        })
    }

    return (
        <ScrollView>
            <Header param={"Mass Recordings"}/> 
            <View className="mt-20 mb-10">
                {
                    video.map((item) => {
                        const { id = {}, snippet = {} } = item
                        const { title, thumbnails = {} } = snippet
                        const { medium = {} } = thumbnails
                        const { videoId } = id
                        return (
                            <View key={Math.random()} className="flex flex-col justify-center items-center p-5">
                                <Pressable className="flex flex-col justify-center items-center" onPress={() => {Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`)}}>
                                    <Image source={{uri: `${medium.url}`}} style={{ width: 250, height: 140, borderRadius: 10, borderWidth: 3, borderColor: "#51abcb" }}/>
                                    <Text className="mt-5 text-base text-center text-black">{title}</Text>
                                </Pressable>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default MassScreen