<template>
  <v-layout column>
    <h1 class="display-4 ma-5">Attributes</h1>

    <p :class="paragraph">
      In this guide, you will learn fundamental elements to understand and 
      manipulate attributes in OpenGeode.
    </p>

    <h2 :class="section">What are attributes?</h2>

    <p
      :class="paragraph"
    >Attributes stand for properties you can add on OpenGeode objects, typically meshes. 
    These properties are not directly stored on meshes, so you can imagine add Attributes
    on other objects. </p>

    <p
      :class="paragraph"
    >Attributes are managed by an 
    <span v-html="attributeManager" />.
    Meshes have manager defined on their vertices, edges, facets, and so on.
    Updating the mesh (e.g. by adding or removing vertices) automatically updates attached
    <span v-html="attributeManager" />. </p>

    <p
      :class="paragraph"
    >But you can create an
    <span v-html="attributeManager" />
    that is not attached to a mesh.</p>
    
    <h2 :class="section">Create an Attribute</h2>

    <p
      :class="paragraph"
    >First of all, let's get an  
    <span v-html="attributeManager" />
    by the dedicated mesh methods or by creating it:</p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      AttributeManager manager;
      manager.resize( 10 );
      auto attribute_ptr = manager.find_or_create< VariableAttribute, double >(
        "first_attribute", 12.3 );
      manager.resize( 6 );
    </code>
    <!-- eslint-enable -->

    <p
      :class="paragraph"
    >The first line of the above code creates a default  
    <span v-html="attributeManager" />.</p>

    <p
      :class="paragraph"
    >The second line resizes the created
    <span v-html="attributeManager" />.
    It means that all Attributes associated to this 
    <span v-html="attributeManager" /> will have exactly 10 values.
    </p>

    <p
      :class="paragraph"
    >Notice that this method can be called before and after 
    the creation of Attributes associated to the 
    <span v-html="attributeManager" /> 
    (as done at the fourth line of the above code). 
    </p>

    <p
      :class="paragraph"
    >As in standard library, there is also a method to reserve Attributes capacities. 
    </p>

    <p
      :class="paragraph"
    >Now, take a look at the third line of the above code. 
    This line creates an attribute using the method <code>find_or_create</code>.
    Four elements are needed to define the Attribute to create:
    </p>

    <ul :class="paragraph">
      <li>
        An <strong>attribute name</strong> (here <code>first_attribute</code>): 
        the first parameter of the method <code>find_or_create</code>;
      </li>
      <li>
        The <strong>type</strong> of Attribute storage (here a 
        <span v-html="variableAttribute" />): 
        the first template parameter of the method (more details below);
      </li>
      <li>
        The <strong>type</strong> of Attribute values (here <code>double</code>): 
        the second template parameter of the method;
      </li>
      <li>
        The <strong>default value</strong> (here <code>12.3</code>): 
        the second parameter of the method.
      </li>
    </ul>

    <p
      :class="paragraph"
    >If the attribute already exists and has the same name, 
    same storage and same value type, 
   a pointer to the pre-existing attribute is returned
    without creating a new one. If the attribute name already exist but 
    with a different storage or a different value type, an exception is thrown.
    </p>

    <h3 :class="subsection">Attribute Storage</h3>

    <p
      :class="paragraph"
    >Each attribute may be stored using a storage adapted to its use and its values.
    In OpenGeode, there are three types of attribute storage, 
    but you can easily define your own.
    These storages are:</p>

    <ul :class="paragraph">
      <li>
        <span v-html="variableAttribute" />: 
        one value is stored per attribute element.
        The number of stored values is equal to the attribute size;
      </li>
      <li>
        <span v-html="constantAttribute" />:  
        all the attribute elements have the given default value as value.
        Only one value is stored (the default value);
      </li>
      <li>
        <span v-html="sparseAttribute" />:  
        all the attribute elements have the given default value as value,
        excepted the ones that have been explicitly defined.
        The number of stored values is between one (only the default value) 
        and the attribute size plus one 
        (one value for each attribute element and the default value).
        This storage is useful if the number of values different from the 
        default value is small with regards to the attribute size.
      </li>
    </ul>

    <h2 :class="section">Remove an Attribute</h2>

    <p
      :class="paragraph"
    >
    <span v-html="attributeManager" /> provides a method to remove an attribute given its name.
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
    manager.delete_attribute( "first_attribute" );
    </code>
    <!-- eslint-enable -->

    <h2 :class="section">Get an attribute with a read-only access</h2>

    <p
      :class="paragraph"
    >
    <span v-html="attributeManager" /> provides a method to get a read-only access pointer to 
    an attribute given its name and its value type:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
    const auto read_only_attr = manager.find_attribute< double >( "first_attribute" );
    </code>
    <!-- eslint-enable -->

    <p
      :class="paragraph"
    >
    If you do not know the type of the attribute, 
    an other way is to get a non-type Attribute called a generic attribute:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
    const auto generic_attr = manager.find_generic_attribute( "first_attribute" );
    const auto value = generic_attr->generic_value( 2 ); // get a float
    </code>
    <!-- eslint-enable -->

    <p
      :class="paragraph"
    >
    The pointer points to an
    <span v-html="attributeBase" /> which is a non-typed attribute from which
    derive <span v-html="constantAttribute" />, <span v-html="sparseAttribute" />, 
    and <span v-html="variableAttribute" />.
    </p>

    <p
      :class="paragraph"
    >
    The type of generic values you can get by this way is <code>float</code>.
    </p>

    <p
      :class="paragraph"
    >
    For not arythmetic types (e.g. <code>std::vector< double ></code>) 
    or custom types (e.g. <code>MyType</code>), 
    you should define how to convert this type into float. For instance:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
    template <> 
    struct GenericAttributeConversion< std::vector< double > > 
    { 
      static float converted_value( const std::vector< double >& value ) 
      { 
        return std::accumulate(value.begin(), value.end(), 0);
      } 
    };
    </code>
    <!-- eslint-enable -->

    <p
      :class="paragraph"
    >
    or
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
    template <> 
    struct GenericAttributeConversion< MyType > 
    { 
      static float converted_value( const MyType& value ) 
      { 
        return value.get_a_float(); 
      } 
    };
    </code>
    <!-- eslint-enable -->

    <h2 :class="section">Modify attribute size</h2>

    <p
      :class="paragraph"
    >
    To modify the attribute size, you should use the <span v-html="attributeManager" />.
    The first solution is to use the method <code>resize</code> as shown above.
    The second solution is to select the element to remove:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      AttributeManager manager;
      manager.resize( 6 );
      auto attribute_ptr = manager.find_or_create< VariableAttribute, double >(
        "first_attribute", 12.3 );
      std::vector< bool > to_delete( 6, false );
      to_delete[0] = true;
      to_delete[3] = true;
    </code>
    <!-- eslint-enable -->

    <p
      :class="paragraph"
    >
    Here the elements 0 and 3 are removed from all the 
    attributes associated to the <span v-html="attributeManager" />.
    </p>

    <h2 :class="section">Modify attribute values</h2>

    <p
      :class="paragraph"
    >
    To modify the value of attribute elements, 
    you may use either the attribute itself or 
    its associated <span v-html="attributeManager" />. 
    In the code below, we present four ways to modify attribute values:
    </p>

    <!-- eslint-disable -->
    <code class="cpp primary--text">
      AttributeManager manager;
      manager.resize( 6 );
      auto attribute_ptr = manager.find_or_create< VariableAttribute, double >(
        "first_attribute", 12.3 );
      // values: 12.3 12.3 12.3 12.3 12.3 12.3 
      
      attribute_ptr->set_value( 1, 5.0 );
      // values: 12.3 5.0 12.3 12.3 12.3 12.3 

      const auto factor = 2;
      attribute_ptr->modify_value( 4, [&factor]( double& value ){ value *= factor; } );
      // values: 12.3 5.0 12.3 12.3 24.6 12.3 

      manager.assign_attribute_value( 1, 2 );
      // values: 12.3 5.0 5.0 12.3 24.6 12.3 

      const AttributeLinearInterpolation interpolator{ {2, 4}, {0.5, 0.5} };
      manager.interpolate_attribute_value( 0, interpolator );
      // values: 14.8 5.0 5.0 12.3 24.6 12.3 
    </code>
    <!-- eslint-enable -->

    <p
      :class="paragraph"
    >
    If you use <span v-html="attributeManager" /> methods, 
    the modification will be operated on all associated attributes.
    </p>

  </v-layout>
</template>

<script>
export default {
  data: () => ({
    section: 'display-2 ma-5 pa-5',
    subsection: 'display-1 mx-10 px-10',
    paragraph: 'body-1 my-5',
    nb: 'secondary font-italic body-1 pa-5',
    attributeBase:
      "<a href='/opengeode?page=class_geode_AttributeBase.html'><code>AttributeBase</code></a>",
    attributeManager:
      "<a href='/opengeode?page=class_geode_AttributeManager.html'><code>AttributeManager</code></a>",
    variableAttribute:
      "<a href='/opengeode?page=class_geode_VariableAttribute.html'><code>VariableAttribute</code></a>",
    constantAttribute:
      "<a href='/opengeode?page=class_geode_ConstantAttribute.html'><code>ConstantAttribute</code></a>",
    sparseAttribute:
      "<a href='/opengeode?page=class_geode_SparseAttribute.html'><code>SparseAttribute</code></a>"

  })
}
</script>

<style>
.cpp {
  background-color: #ffffff !important;
}
</style> 
