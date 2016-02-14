import React, { View, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { UIImagePickerManager } from 'NativeModules'
import Button from '../../common/button'

import Style from './profile-edit-screen__style.js'

const pickerOptions = {
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...',
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  maxWidth: 800,
  maxHeight: 800,
  quality: 0.9,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default React.createClass({
  showImagePicker() {
    UIImagePickerManager.showImagePicker(pickerOptions, (didCancel, response) => {
      if (!didCancel) {
        this.props.onChange({
          photoBase64: 'data:image/jpeg;base64,' + response.data
        })
      }
    });
  },

  _onChangePhone() {
    Actions.confirmPhoneOptionally({
      onConfirmationSuccessful: Actions.profile,
    })
  },

  render() {
    let {name, email, phoneNumber, photoUrl} = this.props

    return (
        <View style={[Style.profile, FormStyle.formGroup, FormStyle.formGroupPlain]}>
          <Image source={photoUrl} style={Style.image} />
          <Button text="Change Photo" size="m" view="plain" onPress={() => this.showImagePicker()} />

            <View style={[Style.profileDetails, FormStyle.form]}>
              <FormTextInput label="Name" placeholder="Name" value={name} onChange={(text) => this.props.onChange({name: text})} />
              <FormTextInput label="Email" placeholder="Email" value={email} onChange={(text) => this.props.onChange({email: text})} />
              <FormTextInput label="Phone" placeholder="Phone" value={phoneNumber} editable={false} />
          </View>
          <Button text="Change phone number"
            view="plain"
            onPress={this._onChangePhone}
          />
        </View>
    );
  },

});
