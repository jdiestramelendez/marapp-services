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

import makeError from 'make-error';
import redis, { ClientOpts, RedisClient } from 'redis';

import { getLogger } from '../logging';

export const RedisError = makeError('RedisError');

const logger = getLogger('redis');

/**
 * Create a Redis connection.
 * @param redisURI
 * @param options
 * @return connection client
 */
export const createRedisConnection = async (redisURI: string, options: ClientOpts = {}): Promise<RedisClient> => {
  return new Promise(async (resolve, reject) => {
    try {
      logger.info('Establishing connection to Redis');

      const client = redis.createClient({ url: redisURI, ...options });

      client.on('ready', () => {
        logger.warn('Redis connection successful');
        resolve(client);
      });
      client.on('error', (err) => {
        logger.error(`Redis connection disconnected: ${err}`);
      });
    } catch (err) {
      logger.error(err);
      throw new RedisError(`Redis connection error. Failed to connect to server: ${redisURI}`);
    }
  });
};
