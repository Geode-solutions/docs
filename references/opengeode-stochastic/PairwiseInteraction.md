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

# class PairwiseInteraction


## Functions

### PairwiseInteraction

```cpp
public void PairwiseInteraction<Type>()
```


### PairwiseInteraction

```cpp
public void PairwiseInteraction<Type>(SCOPE scope)
```


### ~PairwiseInteraction

```cpp
public void ~PairwiseInteraction<Type>()
```


### evaluate

```cpp
public double evaluate(const ObjectRef<Type> & object_a, const ObjectRef<Type> & object_b)
```


### neighborhood_searching_distance

```cpp
public double neighborhood_searching_distance()
```

### compute

```cpp
protected double compute(const ObjectRef<Type> & object_a, const ObjectRef<Type> & object_b)
```



## Enums

| enum class SCOPE |

--

| all_set |
| same_set |
| different_set |





