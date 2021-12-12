# `galaxy-utility`

> npm install galaxy-utility -D

## Usage

### `getClass`

```
import { getClass } from 'galaxy-utility';

<div
  className={
    getClass({
      'class-1': true,
      'class-2': false
    })
  }
>
  Galaxy Utility
</div>
```

### `getAge`

```
import { getAge } from 'galaxy-utility';

getAge(timestamp: number)

Ex: return 20
```

### `getGmtTime`
```
import { getGmtTime } from 'galaxy-utility';

getGmtTime()

Ex: return GMT+07:00
```

### `slugURL`
```
import { slugURL } from 'galaxy-utility';

slugURL(url: string)

Ex: return nguyen-hong-duc
```