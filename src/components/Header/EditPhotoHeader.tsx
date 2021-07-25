import React from 'react';
import { View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import Layout, { DEFAULT_PAADING } from '@/constants/Layout';

type Tprops = {
  selectedFileName: any[];
  canclePhotoHandler: (filename: string) => void;
};

export default React.memo(function EditPhotoHeader({
  selectedFileName,
  canclePhotoHandler,
}: Tprops) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: '#202020',
      }}>
      <View style={{ width: Layout.screen.width - DEFAULT_PAADING }}>
        <FlatList
          scrollEnabled={true}
          data={selectedFileName}
          horizontal={true}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            const uri = item.uri;
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  zIndex: 10,
                  marginHorizontal: 5,
                }}>
                <ImageBackground
                  source={{ uri }}
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                  }}
                />
                <TouchableOpacity
                  style={{ position: 'absolute', right: -3, top: 0 }}
                  onPress={() => {
                    canclePhotoHandler(item.filename);
                  }}>
                  <SVGIcon icon={'cancle_photo'} size="20" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity>
        <SVGIcon icon={'check_neon'} size="46" />
      </TouchableOpacity>
    </View>
  );
});
