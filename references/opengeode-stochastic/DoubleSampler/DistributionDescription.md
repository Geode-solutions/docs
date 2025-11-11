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

# struct DistributionDescription


## Members

```cpp
public basic_string name

```

```cpp
public NamedType distribution_type

```

```cpp
public optional min_value

```

```cpp
public optional max_value

```

```cpp
public optional mean

```

```cpp
public optional standard_deviation

```



