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

# class MetropolisHastings


## Functions

### MetropolisHastings

```cpp
public void MetropolisHastings<ObjectType>(const Model<ObjectType> & model, std::unique_ptr<ProposalKernel<ObjectType>> proposal_kernel)
```


### step

```cpp
public StepResult<ObjectType> step(ObjectSets<ObjectType> & state, RandomEngine & engine)
```


### walk

```cpp
public void walk(ObjectSets<ObjectType> & state, RandomEngine & engine, index_t nb_steps)
```


### walk_copy

```cpp
public ObjectSets<ObjectType> walk_copy(ObjectSets<ObjectType> initial, RandomEngine & engine, index_t nb_steps)
```


### beta

```cpp
public double beta()
```


### set_beta

```cpp
public void set_beta(double beta)
```


### acceptance_prob_helper

```cpp
public static double acceptance_prob_helper(double log_accept)
```




