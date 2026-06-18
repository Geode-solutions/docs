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

# class MinimalDistanceCutoff


 MinimalDistanceCutoff A pairwise interaction that returns 1 if the Minimal distance between objects is within a cutoff radius, otherwise 0.



```cpp
Inherits from PairwiseInteraction<Type>
```



## Functions

### MinimalDistanceCutoff

```cpp
public void MinimalDistanceCutoff<Type>(double cutoff_distance)
```


### neighborhood_searching_distance

```cpp
public double neighborhood_searching_distance()
```


### compute

```cpp
protected double compute(const ObjectRef<Type> & object_a, const ObjectRef<Type> & object_b)
```




# class MinimalDistanceCutoff


```cpp
Inherits from PairwiseInteraction<class geode::Point<2> >
```



# class MinimalDistanceCutoff


```cpp
Inherits from PairwiseInteraction<class geode::OwnerSegment<2> >
```



# class MinimalDistanceCutoff


```cpp
Inherits from PairwiseInteraction<class geode::Point<3> >
```



