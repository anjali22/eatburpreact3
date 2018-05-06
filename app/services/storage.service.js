import { AsyncStorage } from 'react-native';

export const currentUser_Token = "currentUser_Token";

const deviceStorage = {

    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
            console.log('saved----', value)
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

     /* async loadJWT() {
        try {
            let value = await AsyncStorage.getItem('currentUser_Token')
                console.log('vlue-----------', value);
                return value;

        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }, */

     isSignedIn() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(currentUser_Token)
                .then(res => {
                    console.log(res)
                    if (res !== null) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                })
                .catch(err => reject(err));
        });
    },

    async deleteJWT() {
        try {
            await AsyncStorage.removeItem('currentUser_Token')
                .then(
                    () => {
                        this.setState({
                            jwt: ''
                        })
                    }
                );
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }

};
export default deviceStorage;
