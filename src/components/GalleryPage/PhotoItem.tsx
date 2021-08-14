import React from 'react';
import tw from '@/styles/tailwind';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import SVGIcon from '@/lib/svg/SVGIcon';
import { TSelectedPhotos } from '@/components/Gallery';

type Tprop = {
  uri: string;
  filename: string;
  isEffect: boolean;
  isSelect?: boolean;
  isCallStackNavigator: () => void;
  selectedPhotoHandler?: ({ filename, uri }: TSelectedPhotos) => void;
};

export default React.memo(function PhotoItem({
  uri,
  filename,
  isEffect,
  isSelect,
  isCallStackNavigator,
  selectedPhotoHandler,
}: Tprop) {
  return (
    <View>
      <View style={tw`w-24 h-28 mx-1 bg-gray_c1`}>
        {isEffect ? (
          <View
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              zIndex: 10,
            }}>
            <TouchableOpacity
              onPress={() => selectedPhotoHandler && selectedPhotoHandler({ filename, uri })}>
              <SVGIcon icon={isSelect ? 'check_complete' : 'empty_white_circle'} size="24" />
            </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity onPress={isCallStackNavigator}>
          <ImageBackground
            source={{ uri }}
            style={{
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});