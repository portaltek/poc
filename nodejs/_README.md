cashier-shift:

- audit: [{usr, dt, desc}]
- location: MY_LOCATION_UQ_NAME
- cachier: USERNAME
- start-dt:
- close-dt:
- sale: amount, desc, total, tax
- payment: cash, coupon, cards, giftcards
- tickets: [{number, amount, desc, total, tax}]
- state: OPEN | APPROVED | POSTED

ticket:

- \_id: number, location, cachier, datetime
- sale: amount, desc, total, tax
- payment: cash, coupon, cards, giftcards
- items: [{_id, name, quantity, amount, desc, total}]

item:

- \_id: code, name, description, price
- audit: [{usr, dt, desc}]
- state: A | D |
- combo: [{code, name}] # Reference to other items.

item-menu:

- \_id: code, name, description, location, start-time, expiration,
- audit: [{usr, dt, desc}]
- state: A | D |
- items: [{code, name, price, desc}]
