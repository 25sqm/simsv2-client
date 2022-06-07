import React, { useEffect } from 'react';

import { Title, Text, Paper, Divider } from '@mantine/core';
import { clientManagement } from './dummyData';
import TableRender from '../../modules/admin/TableRender';

const ClientManagement = () => {
	return (
		<>
			<Paper shadow="md" p="sm" my="md" sx={{ height: 'auto' }}>
				<Text size="xl">Client Management</Text>
				<Divider my="sm" />
				<TableRender
					data={clientManagement}
					idColumn={'ref_no'}
					ignoreColumn={'actionbtn'}
					columnHeadings={[
						'',
						'Client',
						'Client Code',
						'Description',
						'Permanent Address',
						'Action',
					]}
				/>
			</Paper>
		</>
	);
};

export default ClientManagement;
