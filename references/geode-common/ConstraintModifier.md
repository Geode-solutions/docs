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

# class ConstraintModifier


## Records

CommonConstraints

OrientedEdgeVertices

CollapseEdgeInfo

SplitInfo

RemoveAdjacencyInfo



## Functions

### ConstraintModifier

```cpp
public void ConstraintModifier(const ConstraintModifier & )
```


### operator=

```cpp
public ConstraintModifier & operator=(const ConstraintModifier & )
```


### ConstraintModifier

```cpp
public void ConstraintModifier()
```


### ConstraintModifier

```cpp
public void ConstraintModifier(ConstraintModifier && other)
```


### operator=

```cpp
public ConstraintModifier & operator=(ConstraintModifier && other)
```




## Enums

| enum class BORDER_CONSTRAINT |

--

| free |
| fixed |
| epsilon |





