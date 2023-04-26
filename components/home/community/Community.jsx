import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./community.style";
import { COLORS } from "../../../constants";
import CommunityCard from "../../common/cards/community/CommunityCard";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from 'react';
import axios from "axios";

function Community() {
    const router = useRouter();
    const [data, setData] = useState([])
    let isLoading = ""
    let error = ""

    useEffect(() => {
      async function fetchData() {
            try {
                const options = {
                    method: "GET",
                    url: `http://15.164.218.46:4000/community`,
                    headers: {
                    },
                    params: {
                      query: "",
                      num_pages: "1",
                    },
                };
                const response = await axios.request(options);
                setData(response.data.data)

            } catch (error) {
                console.log(error);
            } finally {
            }
      }
      fetchData();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((item) => (
                        <CommunityCard
                        item={item}
                         />

                    ))
                )}
            </View>
        </View>
    );
};
export default Community
