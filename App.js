import React from 'react';
import {View, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const App = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Rexen Text */}
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: "center",
        }}>
          <Text
            style={{
              fontFamily: 'GlacialIndifference-Bold',
              fontSize: hp(5),
            }}>
            Rexene
          </Text>
          <Text
          style={{
            fontFamily: 'GlacialIndifference-Regular',
            fontSize: hp(3),
            marginTop: hp(2),
            // backgroundColor: 'pink',
          }}>
            Music Player
          </Text>
        </View>
      </View>
    </>
  );
};

// const styles = StyleSheet.create({});

export default App;
