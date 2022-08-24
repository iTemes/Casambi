import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';

import LightControl from '../../components/LightControl';

const data = [
  {
    id: 1,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Open Space',
    isSetting: true,
    value: 50,
  },
  {
    id: 2,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Переговорка',
    isSetting: true,
    value: 30,
  },
  {
    id: 3,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Группа',
    isSetting: true,
    value: 70,
    isGroup: true,
  },
  {
    id: 4,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Кухня',
    isSetting: true,
    value: 80,
  },
  {
    id: 5,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/power.jpg',
    label: 'Все источники света',
    isSetting: false,
  },
  {
    id: 6,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/radio.jpg',
    label: 'Источники света поблизости',
    isSetting: false,
  },
];

const dataGroup = [
  {
    id: 1,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Open Space',
    isSetting: true,
    value: 50,
  },
  {
    id: 2,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Переговорка',
    isSetting: true,
    value: 30,
  },
  {
    id: 3,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Группа',
    isSetting: true,
    value: 70,
  },
  {
    id: 4,
    image: 'https://www.centrsvet.ru/media/uploads/casambi/light.jpg',
    label: 'Кухня',
    isSetting: true,
    value: 80,
  },
];

const image = require('../../assets/images/Union.png');

const LightScreen = ({navigation}) => {
  const [isGroupModal, setIsGroupModal] = useState(false);
  const [isControlModal, setIsControlModal] = useState(false);
  const [tumbPos, setTumbPos] = useState(50);

  const windowWidth = Dimensions.get('window').width;

  console.log('width', windowWidth);
  const renderList = () => {
    return data.map((element) => {
      return (
        <LightControl
          onShow={() => setIsGroupModal(true)}
          key={element.id}
          data={element}
          name="test"
        />
      );
    });
  };

  const renderGroup = () => {
    return dataGroup.map((element) => {
      return <LightControl key={element.id} data={element} />;
    });
  };

  const redrowTumb = (coord) => {
    const coordX = (coord / (windowWidth - 100)) * 100;
    if (coordX > 100) return setTumbPos(100);
    setTumbPos(coordX.toFixed());
    console.log('coord', coordX);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Pressable
        onLongPress={(e) => {
          setIsControlModal(true);
          console.log('e', e.nativeEvent.locationX);
        }}
        onPressOut={() => {
          setIsControlModal(false);
        }}
      >
        <View 
          onTouchMove={(e) => {
            redrowTumb(e.nativeEvent.locationX);
          }}
          style={styles.controlWrapper}>{renderList()}</View>
      </Pressable>

      <Modal
        visible={isGroupModal}
        presentationStyle="fullScreen"
        animationType="slide"
        onRequestClose={() => setIsGroupModal(false)}>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => {
            setIsGroupModal(false);
          }}>
          <View>
            <TouchableWithoutFeedback>
              <View>
                <Text style={styles.modalTitle}>Группа</Text>
                <View style={styles.modalView}>
                  <View
                    style={[styles.controlWrapper, styles.controlWrapperGroup]}>
                    {renderGroup()}
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.transparent}>
        <Modal
          visible={isControlModal}
          animationType="slide"
          onRequestClose={() => setIsControlModal(false)}
          transparent>
          <View style={styles.controlModal}>
            <View style={[styles.modalRange]}>
              <View style={[styles.modalThumb, {left: `${tumbPos}%`}]}>
                <ImageBackground source={image} style={styles.modalImageThumb}>
                  <Text style={styles.modalThumbText}>{tumbPos}%</Text>
                </ImageBackground>
              </View>
              <View style={[styles.modalRangeValue, {width: `${tumbPos}%`}]} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  controlWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#D7D7D7',
    borderRadius: 26,
    maxWidth: 310,
    minHeight: 371,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 0,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  controModalView: {
    backgroundColor: 'yellow',
  },
  controlModal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    paddingTop: 150,
    marginTop: 150,
  },
  modalRange: {
    width: 290,
    height: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  modalRangeValue: {
    position: 'absolute',
    left: 0,
    top: -1,
    width: '50%',
    height: 2,
    backgroundColor: '#000000',
  },
  modalThumb: {
    position: 'absolute',
    top: -32,
    left: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 67,
    transform: [{translateX: '-27%'}, {translateY: '-50%'}],
  },
  modalImageThumb: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  modalThumbText: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 22,
    paddingTop: 16,
  },
});

export default LightScreen;
