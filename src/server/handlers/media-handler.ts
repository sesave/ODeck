import MediaKeys from 'server/enums/media-keys.enum';

import robot from '@jitsi/robotjs';

export const mediaHandler = (keyPressed: MediaKeys) => {
  robot.keyTap(keyPressed);
};

export default null;
