<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct PropHeaderData


## Members

```cpp
public int names

```

```cpp
public int prop_legal_ranges

```

```cpp
public int no_data_values

```

```cpp
public int property_classes

```

```cpp
public int kinds

```

```cpp
public int property_subclass

```

```cpp
public int esizes

```

```cpp
public int units

```



## Functions

### empty

```cpp
public bool empty()
```




