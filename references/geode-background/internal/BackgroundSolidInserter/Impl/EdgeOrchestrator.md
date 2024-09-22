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

# class EdgeOrchestrator


```cpp
Inherits from InserterOrchestrator
```



## Functions

### EdgeOrchestrator

```cpp
public void EdgeOrchestrator(class BackgroundSolidInserter::Impl & inserter, ProgressLogger & logger, const EdgedCurve3D & curve_mesh)
```


### insert_vertices

```cpp
public void insert_vertices(Span elements)
```




