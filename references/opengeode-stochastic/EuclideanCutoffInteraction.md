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

# class EuclideanCutoffInteraction


```cpp
Inherits from PairwiseInteraction<Point<2> >
```



# class EuclideanCutoffInteraction


 EuclideanCutoffInteraction A pairwise interaction that returns 1 if the Euclidean distance between objects is within a cutoff radius, otherwise 0.



```cpp
Inherits from PairwiseInteraction<Type>
```



## Functions

### EuclideanCutoffInteraction

```cpp
public void EuclideanCutoffInteraction<Type>(double cutoff_distance)
```


### EuclideanCutoffInteraction

```cpp
public void EuclideanCutoffInteraction<Type>(double cutoff_distance, typename PairwiseInteraction<Type>::SCOPE scope)
```


### neighborhood_searching_distance

```cpp
public double neighborhood_searching_distance()
```


### compute

```cpp
protected double compute(const ObjectRef<Type> & object_a, const ObjectRef<Type> & object_b)
```




# class EuclideanCutoffInteraction


```cpp
Inherits from PairwiseInteraction<OwnerSegment<2> >
```



# class EuclideanCutoffInteraction


```cpp
Inherits from PairwiseInteraction<Point<3> >
```



