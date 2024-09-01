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

# class OpenGeodeHybridSolidBuilder


 Implementation class for HybridSolidBuilder using OpenGeode data structure



```cpp
Inherits from HybridSolidBuilder<dimension>
```



## Functions

### OpenGeodeHybridSolidBuilder

```cpp
public void OpenGeodeHybridSolidBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeHybridSolidBuilder

```cpp
public void OpenGeodeHybridSolidBuilder<dimension>(OpenGeodeHybridSolid<dimension> & mesh)
```




# class OpenGeodeHybridSolidBuilder


```cpp
Inherits from HybridSolidBuilder<3U>
```



