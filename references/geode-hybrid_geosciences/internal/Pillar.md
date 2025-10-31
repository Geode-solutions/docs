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

# struct Pillar


## Members

```cpp
public const index_t background_vertex

```

```cpp
public const double pillar_x

```

```cpp
public const double pillar_y

```

```cpp
public const double pillar_z

```

```cpp
public flat_hash_set line_on_pillar

```

```cpp
public vector pillar_points

```



## Functions

### Pillar

```cpp
public void Pillar(const index_t vertex, const double x, const double y, const double z)
```




