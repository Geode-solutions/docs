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

# class Topology


 This mixin stores topological information about a set of components. This information is topological relationships between components and identifications between geometric component vertices.



```cpp
Inherits from Relationships, VertexIdentifier
```



## Functions

### Topology

```cpp
protected void Topology()
```


### Topology

```cpp
protected void Topology(Topology && other)
```


### operator=

```cpp
protected Topology & operator=(Topology && other)
```




