/*
  Copyright 2018-2020 National Geographic Society

  Use of this software does not constitute endorsement by National Geographic
  Society (NGS). The NGS name and NGS logo may not be used for any purpose without
  written permission from NGS.

  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed
  under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
  CONDITIONS OF ANY KIND, either express or implied. See the License for the
  specific language governing permissions and limitations under the License.
*/

import { requireEnv } from '../helpers/util';

export const AUTH0_CLIENT_ID = requireEnv('AUTH0_CLIENT_ID');
export const AUTH0_CLIENT_SECRET = requireEnv('AUTH0_CLIENT_SECRET');
export const AUTH0_DOMAIN = requireEnv('AUTH0_DOMAIN');
export const AUTH0_EXTENSION_URL = requireEnv('AUTH0_EXTENSION_URL');
export const AUTH0_APPLICATION_CLIENT_ID = requireEnv('AUTH0_APPLICATION_CLIENT_ID');
export const AUTH0_REALM = requireEnv('AUTH0_REALM', 'Username-Password-Authentication');
