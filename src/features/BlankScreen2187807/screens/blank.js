import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10415_40}>
        <View style={styles.View_10415_57}>
          <Text style={styles.Text_10415_57}>The Bravo Mix</Text>
        </View>
        <View style={styles.View_10415_58}>
          <Text style={styles.Text_10415_58}>Bravo Team</Text>
        </View>
        <View style={styles.View_10415_59}>
          <Text style={styles.Text_10415_59}>3h 45m</Text>
        </View>
        <View style={styles.View_10415_60}>
          <View style={styles.View_10415_61} />
          <View style={styles.View_10415_62} />
        </View>
        <View style={styles.View_10415_63}>
          <View style={styles.View_10415_64}>
            <Text style={styles.Text_10415_64}>Entrepreneur (feat. Jay-Z)</Text>
          </View>
          <View style={styles.View_10415_65}>
            <Text style={styles.Text_10415_65}>Pharrell Williams, Jay-Z</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e62f/343f/4a92950b105b38bd08cfd1fe854c19de"
            }}
            style={styles.ImageBackground_10415_66}
          />
        </View>
        <View style={styles.View_10415_67}>
          <View style={styles.View_10415_68}>
            <Text style={styles.Text_10415_68}>Don’t Go Bacon My Heart</Text>
          </View>
          <View style={styles.View_10415_69}>
            <Text style={styles.Text_10415_69}>Elton John</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_10415_70}
          />
        </View>
        <View style={styles.View_10415_71}>
          <View style={styles.View_I10415_71_10415_68}>
            <Text style={styles.Text_I10415_71_10415_68}>Chips Don’t Lie</Text>
          </View>
          <View style={styles.View_I10415_71_10415_69}>
            <Text style={styles.Text_I10415_71_10415_69}>Shakira</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_I10415_71_10415_70}
          />
        </View>
        <View style={styles.View_10415_72}>
          <View style={styles.View_I10415_72_10415_68}>
            <Text style={styles.Text_I10415_72_10415_68}>The Onion Song</Text>
          </View>
          <View style={styles.View_I10415_72_10415_69}>
            <Text style={styles.Text_I10415_72_10415_69}>
              Marvin Gaye, Tammi Terrell
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_I10415_72_10415_70}
          />
        </View>
        <View style={styles.View_10415_73}>
          <View style={styles.View_I10415_73_10415_68}>
            <Text style={styles.Text_I10415_73_10415_68}>Wok This Way</Text>
          </View>
          <View style={styles.View_I10415_73_10415_69}>
            <Text style={styles.Text_I10415_73_10415_69}>Aerosmith</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_I10415_73_10415_70}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a66/944e/ed7298fbef8d25fd1a7bbbe60000c728"
          }}
          style={styles.ImageBackground_10415_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/777e/faf5/e7311d3a6c65634d4f77cdf9b204695c"
          }}
          style={styles.ImageBackground_10415_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8de6/dac8/5c6a7a90e1c2322091174904b48de7f0"
          }}
          style={styles.ImageBackground_10415_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fb3/7576/cfb30bd509dbca89ac5d86611a9b4699"
          }}
          style={styles.ImageBackground_10415_77}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10415_40: {
    width: 375,
    minWidth: 375,
    height: 812,
    minHeight: 812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10415_57: {
    width: 155,
    minWidth: 155,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 321
  },
  Text_10415_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10415_58: {
    width: 74,
    minWidth: 74,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 357
  },
  Text_10415_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10415_59: {
    width: 46,
    minWidth: 46,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 382
  },
  Text_10415_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10415_60: {
    width: 67,
    minWidth: 67,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 329,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10415_61: {
    width: 67,
    minWidth: 67,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10415_62: {
    width: 19.394447326660156,
    height: 24.532655715942383,
    top: 21.733673095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  View_10415_63: {
    width: 325,
    minWidth: 325,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 431,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10415_64: {
    width: 173,
    minWidth: 173,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 7
  },
  Text_10415_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10415_65: {
    width: 139,
    minWidth: 139,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 27
  },
  Text_10415_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10415_66: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_10415_67: {
    width: 319,
    minWidth: 319,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 496,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10415_68: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 7
  },
  Text_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10415_69: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 27
  },
  Text_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_10415_70: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_10415_71: {
    width: 319,
    minWidth: 319,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 561,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10415_71_10415_68: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 7
  },
  Text_I10415_71_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I10415_71_10415_69: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 27
  },
  Text_I10415_71_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_I10415_71_10415_70: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_10415_72: {
    width: 319,
    minWidth: 319,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 691,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10415_72_10415_68: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 7
  },
  Text_I10415_72_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I10415_72_10415_69: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 27
  },
  Text_I10415_72_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_I10415_72_10415_70: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_10415_73: {
    width: 319,
    minWidth: 319,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 626,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10415_73_10415_68: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 7
  },
  Text_I10415_73_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I10415_73_10415_69: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 27
  },
  Text_I10415_73_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_I10415_73_10415_70: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_10415_74: {
    width: 229,
    minWidth: 229,
    height: 229,
    minHeight: 229,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73,
    top: 61,
    resizeMode: "cover"
  },
  ImageBackground_10415_75: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 626,
    resizeMode: "cover"
  },
  ImageBackground_10415_76: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 691,
    resizeMode: "cover"
  },
  ImageBackground_10415_77: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 561,
    resizeMode: "cover"
  },
  View_2: { height: 812 }
})
