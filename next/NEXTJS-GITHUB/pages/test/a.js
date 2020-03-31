import { withRouter } from 'next/router'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
`

const A = ({ router, name }) => (
    <>
        <Title>this is a Page</Title>
<span>{router.query.id}{name}</span>
    </>
)

A.getInitialProps = async(ctx) => {
    return {
        name: 'levi'
    }
}

export default withRouter(A)