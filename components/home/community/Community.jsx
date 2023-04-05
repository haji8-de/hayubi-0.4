import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./community.style";
import { COLORS } from "../../../constants";
import CommunityCard from "../../common/cards/community/CommunityCard";
import useFetch from "../../../hooks/useFetch";

const Community = () => {
    const router = useRouter();
//     const data = [{"title":"TEST", "description":"critical", "editor":"haji"},{"title":"TEST", "description":"critical", "editor":"haji"},{"title":"TEST", "description":"critical", "editor":"haji"},{"title":"TEST", "description":"critical", "editor":"haji"}]
//     const isLoading = ""
//     const error = ""
    const { data, isLoading, error } = useFetch("community", {
        query: "",
        num_pages: "1",
    });

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

export default Community;
