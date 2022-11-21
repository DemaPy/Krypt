import React from 'react'

export const shortenAddress = (address) => {
    return `${address.slice(0,5)}...${address.slice(address.length-4, address.length)}`
}
