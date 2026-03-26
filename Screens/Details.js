import { View, Text } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { useState, useEffect } from 'react'


export default function DetailsScreen (){

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  
    return (
        <View>
            <Text>Details Screen</Text>
            
        </View>
    )
}