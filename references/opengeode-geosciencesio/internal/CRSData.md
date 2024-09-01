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

# struct CRSData


## Members

```cpp
public array axis_names

```

```cpp
public array axis_units

```

```cpp
public bool z_sign_positive

```

```cpp
public basic_string name

```

```cpp
public basic_string projection

```

```cpp
public basic_string datum

```



