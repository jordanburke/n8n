import {
	INodeProperties,
} from 'n8n-workflow';

export const userOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create an user',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an user',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve an user',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Retrieve all users',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an user',
			},
		],
		default: 'create',
	},
];

export const userFields: INodeProperties[] = [
	// ----------------------------------------
	//               user: create
	// ----------------------------------------
	{
		displayName: 'Name',
		name: 'name',
		description: 'Login name of the user',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Roles Name or ID',
		name: 'roles',
		type: 'multiOptions',
		description: 'Comma-separated list of roles to assign to the user',
		required: true,
		default: [],
		typeOptions: {
			loadOptionsMethod: 'getRoles',
		},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'realname',
				type: 'string',
				default: '',
				description: 'Full name of the user',
			},
		],
	},

	// ----------------------------------------
	//               user: delete
	// ----------------------------------------
	{
		displayName: 'User ID',
		name: 'userId',
		description: 'ID of the user to delete',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//                user: get
	// ----------------------------------------
	{
		displayName: 'User ID',
		name: 'userId',
		description: 'ID of the user to retrieve',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------------
	//               user: getAll
	// ----------------------------------------
{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},

	// ----------------------------------------
	//               user: update
	// ----------------------------------------
	{
		displayName: 'User ID',
		name: 'userId',
		description: 'ID of the user to update',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'user',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Name',
				name: 'realname',
				type: 'string',
				default: '',
				description: 'Full name of the user',
			},
			{
				displayName: 'Password',
				name: 'password',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Roles Name or ID',
				name: 'roles',
				type: 'multiOptions',
				description: 'Comma-separated list of roles to assign to the user',
				required: true,
				default: [],
				typeOptions: {
					loadOptionsMethod: 'getRoles',
				},
			},
		],
	},
];
