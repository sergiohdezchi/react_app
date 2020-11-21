import React from 'react'

const UserCard = ({ name, username, email }) => (
    <article className ="card">
        <h3 className ="t5 s-mb-2 s-center">
            { name }
        </h3>
        <div className ="s-mb-2 s-main-center">
            <div className ="card__teacher s-cross-center">
            <span className ="small">{ username } </span>
            </div>
        </div>
        <div className ="s-main-center">
            <a className ="button--ghost-alert button--tiny" href="http://www.google.com">{ `$ ${ email }` }</a>
        </div>
    </article>
)

export default UserCard