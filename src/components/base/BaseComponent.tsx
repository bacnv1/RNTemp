import React, {
    Component
} from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    StyleSheet
} from 'react-native';
import {Colors} from '../../assets'

/**
 * P: your props placeholder
 * S: your state placeholder
 * */
export default class BaseComponent<P = {}, S = {}> extends Component<P, S> {
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={{flex: 1}}
                    behavior='padding'>
                    <ScrollView
                        keyboardShouldPersistTaps="always"
                        keyboardDismissMode="interactive">
                        {this.renderViewContent()}
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }

    /*
    * override this method for render your screen
    * */

    // @ts-ignore
    renderViewContent(): React.ReactNode
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1
    }
})