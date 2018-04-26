import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    //background1: '#B721FF',
    background1: '#efefef',
    background2: '#efefef'
    //background2: '#21D4FD'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30,
    },
    
        imageNotSelectedContainer: {
            backgroundColor:'#fff',
            height:50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageNotSelected: {
            height:25,
            width: 25,
        },
        imageContainer: {
            backgroundColor:'#fff',
            height:60,
            width: 60,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            elevation:5,
          },
          image: {
            height:30,
            width: 30,
            
          },
    
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        backgroundColor: '#b32c50',         //pale pink
        height: 350,
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    //the complete container below searchbar
    sliderContentContainer: {
        height: 350,
        //backgroundColor: '#f7b32d',            //bright yellow 
        backgroundColor: '#efefef',
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },

    tabText :{
        fontSize: 16,
        fontFamily: 'open-sans-regular',
        color: '#4d5656',

    }
});
