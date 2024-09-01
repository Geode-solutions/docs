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
public vector names

```

```cpp
public vector prop_legal_ranges

```

```cpp
public vector no_data_values

```

```cpp
public vector property_classes

```

```cpp
public vector kinds

```

```cpp
public vector property_subclass

```

```cpp
public vector esizes

```

```cpp
public vector units

```



## Functions

### empty

```cpp
public bool empty()
```




