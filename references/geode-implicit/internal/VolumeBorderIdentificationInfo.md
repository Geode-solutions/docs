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

# struct VolumeBorderIdentificationInfo


## Members

```cpp
public const geode::uuid & border_surface_id

```

```cpp
public geode::index_t border_surface_facet

```

```cpp
public const geode::Vector3D & normal_towards_volume

```



