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

# class OpenGeodeGraphBuilder


 Implementation class for GraphBuilder using OpenGeode data structure



```cpp
Inherits from GraphBuilder
```



## Functions

### OpenGeodeGraphBuilder

```cpp
public void OpenGeodeGraphBuilder(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeGraphBuilder

```cpp
public void OpenGeodeGraphBuilder(OpenGeodeGraph & mesh)
```




