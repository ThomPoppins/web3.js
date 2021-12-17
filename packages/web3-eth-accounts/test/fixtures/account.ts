import {
	InvalidKdfError,
	InvalidPrivateKeyError,
	KeyDerivationError,
	PrivateKeyLengthError,
	InvalidPasswordError,
	IVLengthError,
	PBKDF2IterationsError,
} from 'web3-common';
import { sign, signTransaction, encrypt } from '../../src/account';
import { CipherOptions, KeyStore } from '../../src/types';

export const validPrivateKeytoAccountData: [string, any][] = [
	[
		'0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
		{
			address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
			privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
			sign,
			signTransaction,
			encrypt,
		},
	],
	[
		'0x9e93921f9bca358a96aa66efcccbde12850473be95f63c1453e29656feafeb35',
		{
			address: '0x118C2E5F57FD62C2B5b46a5ae9216F4FF4011a07',
			privateKey: '0x9e93921f9bca358a96aa66efcccbde12850473be95f63c1453e29656feafeb35',
			sign,
			signTransaction,
			encrypt,
		},
	],
];

export const invalidPrivateKeytoAccountData: [
	any,
	PrivateKeyLengthError | InvalidPrivateKeyError,
][] = [
	['', new PrivateKeyLengthError()],
	[Buffer.from([]), new PrivateKeyLengthError()],
	[undefined, new InvalidPrivateKeyError()],
	[null, new InvalidPrivateKeyError()],
];

export const validEncryptData: [[any, string | Buffer, CipherOptions], KeyStore][] = [
	[
		[
			'0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
			'123',
			{
				n: 8192,
				iv: Buffer.from('bfb43120ae00e9de110f8325143a2709', 'hex'),
				salt: Buffer.from(
					'210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
					'hex',
				),
			},
		],
		{
			version: 3,
			address: 'cda9a91875fc35c8ac1320e098e584495d66e47c',
			crypto: {
				ciphertext: 'cb3e13e3281ff3861a3f0257fad4c9a51b0eb046f9c7821825c46b210f040b8f',
				cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
				cipher: 'aes-128-ctr',
				kdf: 'scrypt',
				kdfparams: {
					n: 8192,
					r: 8,
					p: 1,
					dklen: 32,
					salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
				},
				mac: '46eb4884e82dc43b5aa415faba53cc653b7038e9d61cc32fd643cf8c396189b7',
			},
			id: '1d82a61f-2bba-4ebc-a283-56d49d877eb7',
		},
	],
	[
		[
			'0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
			'123',
			{
				n: 8192,
				iv: 'bfb43120ae00e9de110f8325143a2709',
				salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
			},
		],
		{
			version: 3,
			address: 'cda9a91875fc35c8ac1320e098e584495d66e47c',
			crypto: {
				ciphertext: 'cb3e13e3281ff3861a3f0257fad4c9a51b0eb046f9c7821825c46b210f040b8f',
				cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
				cipher: 'aes-128-ctr',
				kdf: 'scrypt',
				kdfparams: {
					n: 8192,
					r: 8,
					p: 1,
					dklen: 32,
					salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
				},
				mac: '46eb4884e82dc43b5aa415faba53cc653b7038e9d61cc32fd643cf8c396189b7',
			},
			id: '1d82a61f-2bba-4ebc-a283-56d49d877eb7',
		},
	],
	[
		[
			'0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
			'123',
			{
				iv: 'bfb43120ae00e9de110f8325143a2709',
				salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
				c: 262144,
				kdf: 'pbkdf2',
			},
		],
		{
			version: 3,
			id: 'e6a68d89-b03c-4e7d-82e0-079eebaa0da7',
			address: 'b8ce9ab6943e0eced004cde8e3bbed6568b2fa01',
			crypto: {
				ciphertext: '76512156a34105fa6473ad040c666ae7b917d14c06543accc0d2dc28e6073b12',
				cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
				cipher: 'aes-128-ctr',
				kdf: 'pbkdf2',
				kdfparams: {
					dklen: 32,
					salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
					c: 262144,
					prf: 'hmac-sha256',
				},
				mac: '46eb4884e82dc43b5aa415faba53cc653b7038e9d61cc32fd643cf8c396189b7',
			},
		},
	],
];

export const invalidEncryptData: [
	[any, any, any],
	(
		| PrivateKeyLengthError
		| InvalidKdfError
		| InvalidPrivateKeyError
		| InvalidPasswordError
		| IVLengthError
		| PBKDF2IterationsError
	),
][] = [
	[
		['0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a', '123', {}],
		new PrivateKeyLengthError(),
	],
	[
		[
			'0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
			'123',
			{
				iv: 'bfb43120ae00e9de110f8325143a2709',
				salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
				kdf: 'hkdf',
			},
		],
		new InvalidKdfError(),
	],
	[
		[undefined, '123', {}], // no private key provided
		new InvalidPrivateKeyError(),
	],
	[
		// no password provided
		['0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709', undefined, {}],
		new InvalidPasswordError(),
	],
	[
		// iv length is not 16 bytes
		[
			'0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
			'123',
			{
				n: 8192,
				iv: Buffer.from('bfb43120ae00e9de110f8325143a27', 'hex'),
				salt: undefined,
			},
		],
		new IVLengthError(),
	],
	[
		[
			// iterations is less than 1000, should error
			'0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
			'123',
			{
				iv: 'bfb43120ae00e9de110f8325143a2709',
				salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
				c: 100,
				kdf: 'pbkdf2',
			},
		],
		new PBKDF2IterationsError(),
	],
];

export const validDecryptData: [[string, string, CipherOptions, string]][] = [
	[
		[
			'0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
			'123',
			{
				iv: Buffer.from('bfb43120ae00e9de110f8325143a2709', 'hex'),
				salt: Buffer.from(
					'210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
					'hex',
				),
			},
			'0x67f476289210e3bef3c1c75e4de993ff0a00663df00def84e73aa7411eac18a6',
		],
	],
];

export const invalidDecryptData: [[any, string], InvalidKdfError | KeyDerivationError][] = [
	// TODO create Keystore test cases after validation PR is merged
	[
		[
			{
				// invalid kdf
				version: 3,
				id: '0e9f63f7-9e7c-4d87-bdf7-02ffe8ee6481',
				address: 'cda9a91875fc35c8ac1320e098e584495d66e47c',
				crypto: {
					ciphertext: '222f49d9cb350b0b9a16472ecb389f8128bc9404233c34ba0484db12fb47534e',
					cipherparams: { iv: '8c36f74571c7aef9dd4901c9c1cc720a' },
					cipher: 'aes-128-ctr',
					kdf: 'hkdf',
					kdfparams: {
						dklen: 32,
						salt: 'ffd22eb8573fb1de0262cc133042e8fd9b193a46f20c09f25f39fae90a7a2896',
						n: 8192,
						r: 8,
						p: 1,
					},
					mac: '46162bad0ac2145ddd399bfb47b474959a2845faf69e69bd1b325ec8db3298cb',
				},
			},
			'123',
		],
		new InvalidKdfError(),
	],

	[
		[
			{
				// wrong password
				version: 3,
				id: 'e6a68d89-b03c-4e7d-82e0-079eebaa0da7',
				address: 'b8ce9ab6943e0eced004cde8e3bbed6568b2fa01',
				crypto: {
					ciphertext: '76512156a34105fa6473ad040c666ae7b917d14c06543accc0d2dc28e6073b12',
					cipherparams: { iv: 'bfb43120ae00e9de110f8325143a2709' },
					cipher: 'aes-128-ctr',
					kdf: 'pbkdf2',
					kdfparams: {
						dklen: 32,
						salt: '210d0ec956787d865358ac45716e6dd42e68d48e346d795746509523aeb477dd',
						c: 262144,
						prf: 'hmac-sha256',
					},
					mac: '46eb4884e82dc43b5aa415faba53cc653b7038e9d61cc32fd643cf8c396189b7',
				},
			},
			'12',
		],
		new KeyDerivationError(),
	],
];