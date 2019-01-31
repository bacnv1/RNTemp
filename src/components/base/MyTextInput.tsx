import React, {PureComponent} from 'react'
import {TextInput, View} from "react-native";

interface Props {
    onTextChange(value: string): void
}


export default class MyTextInput extends PureComponent<Props> {

    render(): React.ReactNode {
        return (
            <View>
                <TextInput
                    {...this.props}
                    onChangeText={this.props.onTextChange}
                    placeholder={"Input your text"}
                />
            </View>
        )
    }
}