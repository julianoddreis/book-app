import React from 'react'

import Row, { RowProps } from '@components/Row'

export interface ColumnProps extends RowProps {}

const Column: React.FC<ColumnProps> = (props) => <Row flexDirection='column' {...props} />

export default Column
