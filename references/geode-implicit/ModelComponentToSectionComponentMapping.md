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

# struct ModelComponentToSectionComponentMapping


## Members

```cpp
public GenericMapping corner_corner

```

```cpp
public GenericMapping line_corner

```

```cpp
public GenericMapping line_line

```

```cpp
public GenericMapping surface_line

```

```cpp
public GenericMapping surface_surface

```

```cpp
public GenericMapping block_surface

```



