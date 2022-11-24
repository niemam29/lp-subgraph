import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit,
  OwnershipTransferred,
  Pool,
  Withdraw
} from "../generated/LiquidityPool/LiquidityPool"

export function createDepositEvent(
  _from: Address,
  _valueRewardToken: BigInt,
  _valueLiquidityToken: BigInt,
  _pool: Address
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "_valueRewardToken",
      ethereum.Value.fromUnsignedBigInt(_valueRewardToken)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "_valueLiquidityToken",
      ethereum.Value.fromUnsignedBigInt(_valueLiquidityToken)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("_pool", ethereum.Value.fromAddress(_pool))
  )

  return depositEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPoolEvent(
  _tokenAAdress: Address,
  _tokenBAdress: Address,
  price: BigInt,
  _poolAdress: Address
): Pool {
  let poolEvent = changetype<Pool>(newMockEvent())

  poolEvent.parameters = new Array()

  poolEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAAdress",
      ethereum.Value.fromAddress(_tokenAAdress)
    )
  )
  poolEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenBAdress",
      ethereum.Value.fromAddress(_tokenBAdress)
    )
  )
  poolEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  poolEvent.parameters.push(
    new ethereum.EventParam(
      "_poolAdress",
      ethereum.Value.fromAddress(_poolAdress)
    )
  )

  return poolEvent
}

export function createWithdrawEvent(
  _to: Address,
  _valueRewardToken: BigInt,
  _valueLiquidityToken: BigInt,
  _pool: Address
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_valueRewardToken",
      ethereum.Value.fromUnsignedBigInt(_valueRewardToken)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "_valueLiquidityToken",
      ethereum.Value.fromUnsignedBigInt(_valueLiquidityToken)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("_pool", ethereum.Value.fromAddress(_pool))
  )

  return withdrawEvent
}
