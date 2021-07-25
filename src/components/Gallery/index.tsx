import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Title from '@/components/Title';
import PhotoList from '@/components/Gallery/PhotoList';
import EditPhotoHeader from '@/components/Header/EditPhotoHeader';
import useStackContext from '@/lib/context/useStackContext';
import { MOCK_IMAGE_ARRAY } from '@/constants/gallery/mock';

type TPhotos = {
  src: string;
  id: number;
  isSelect: boolean;
};

type TProps = {
  navigation: any;
};

type TImages = {
  fileSize: number;
  filename: string;
  height: number;
  playableDuration: any;
  uri: string;
  width: number;
};

type TPhotos = {
  group_name: string;
  image: TImages;
  location: string | null;
  timestamp: number;
  type: string;
};

export default function GalleryIndex({ navigation }: TProps) {
  const [selectedFileName, setSelectedFileName] = useState<any[]>([]);

  const { GalleryStackType } = useStackContext();

  useEffect(() => {});

  return (
    <View>
      {!selectedFileName.length ? (
        <Title title={GalleryStackType} navigation={navigation} />
      ) : (
        <EditPhotoHeader selectedFileName={selectedFileName} />
      )}
      <PhotoList
        navigation={navigation}
        setSelectedFileName={setSelectedFileName}
        selectedFileName={selectedFileName}
      />
    </View>
  );
}
