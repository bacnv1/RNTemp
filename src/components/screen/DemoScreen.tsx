import React from "react";
import {
    Button,
    View,
    StyleSheet,
    FlatList,
    Image,
    Text
} from "react-native";
import BaseComponent from "../base/BaseComponent";
import MyTextInput from "../base/MyTextInput";
// define props for screen
interface Props {
    getUser(): void,

    checkLogic(text: string): boolean

    data: any
}
// define state for screen
interface State {
    data: [],
    text: string
}

export default class DemoScreen extends BaseComponent<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            data: [],
            text: ''
        }
    }

    componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        this.setState({
            data: nextProps.data
        })
    }

    renderViewContent(): React.ReactNode {
        return (
            <View style={styles.container}>
                <MyTextInput
                    onTextChange={(text) => {
                        this.setState({
                            text: text
                        })
                    }}
                />
                <Button
                    title={'Get User'}
                    onPress={() => {
                        if (this.props.checkLogic(this.state.text)) {
                            this.props.getUser()
                        }else {
                            alert("Input your text")
                        }
                    }}
                />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={this.renderItem}/>
            </View>
        )
    }

    renderItem = ({item}: any) => {
        return (
            <View style={styles.viewItem}>
                <Image
                    source={{uri: item.avatar_url}}
                    style={styles.itemImg}
                />
                <Text>
                    {item.login}
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewItem: {
        flexDirection: 'row',
        padding: 10,
    },
    itemImg: {
        width: 60,
        height: 60,
        marginRight: 20
    }
})