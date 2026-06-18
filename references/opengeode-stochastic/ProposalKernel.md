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

# class ProposalKernel


## Functions

### ProposalKernel

```cpp
public void ProposalKernel<ObjectType>(const ProposalKernel<ObjectType> & )
```


### ProposalKernel

```cpp
public void ProposalKernel<ObjectType>(ProposalKernel<ObjectType> && )
```


### operator=

```cpp
public ProposalKernel<ObjectType> & operator=(const ProposalKernel<ObjectType> & )
```


### operator=

```cpp
public ProposalKernel<ObjectType> & operator=(ProposalKernel<ObjectType> && )
```


### ProposalKernel

```cpp
public void ProposalKernel<ObjectType>()
```


### ~ProposalKernel

```cpp
public void ~ProposalKernel<ObjectType>()
```


### propose

```cpp
public Proposal<ObjectType> propose(const ObjectSets<ObjectType> & current, RandomEngine & engine)
```


### add_move

```cpp
public void add_move(const uuid & set_id, std::unique_ptr<Move<ObjectType>> move)
```


### string

```cpp
public std::string string()
```




