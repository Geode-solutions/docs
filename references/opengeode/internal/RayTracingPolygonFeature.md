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

# struct RayTracingPolygonFeature


 Polygon-local vertex or edge hit by a ray, if any. Not in an anonymous namespace: used as RayTracing3D::Impl member.



## Members

```cpp
public geode::local_index_t vertex

```

```cpp
public geode::local_index_t edge

```



