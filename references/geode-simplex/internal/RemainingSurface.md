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

# struct RemainingSurface


## Members

```cpp
public std::unique_ptr<TriangulatedSurface<dimension> > surface

```

```cpp
public vector remeshed_mapping

```

```cpp
public vector background_mapping

```

```cpp
public vector macro_edges

```

```cpp
public vector outside_remaining

```



