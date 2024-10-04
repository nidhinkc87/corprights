import type { Struct, Schema } from '@strapi/strapi';

export interface ElementsPhrase extends Struct.ComponentSchema {
  collectionName: 'components_elements_phrases';
  info: {
    displayName: 'Phrase';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsMarkdownTile extends Struct.ComponentSchema {
  collectionName: 'components_elements_markdown_tiles';
  info: {
    displayName: 'MarkdownTile';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ElementsMarkdownContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_elements_markdown_content_blocks';
  info: {
    displayName: 'MarkdownContentBlock';
    icon: 'dashboard';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    content: Schema.Attribute.RichText;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureTile extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_tiles';
  info: {
    displayName: 'FeatureTile';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
  };
}

export interface ElementsFeatureImageTile extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_image_tiles';
  info: {
    displayName: 'FeatureImageTile';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button_text: Schema.Attribute.String & Schema.Attribute.Required;
    button_link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CustomStage extends Struct.ComponentSchema {
  collectionName: 'components_custom_stages';
  info: {
    displayName: 'Stage';
    icon: 'plus';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'elements.feature-tile', true>;
  };
}

export interface CustomProcess extends Struct.ComponentSchema {
  collectionName: 'components_custom_processes';
  info: {
    displayName: 'Process';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    cards: Schema.Attribute.Component<'elements.feature-tile', true>;
  };
}

export interface CustomPhraseBlock extends Struct.ComponentSchema {
  collectionName: 'components_custom_phrase_blocks';
  info: {
    displayName: 'PhraseBlock';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'elements.phrase', true>;
  };
}

export interface CustomBenefit extends Struct.ComponentSchema {
  collectionName: 'components_custom_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'chartPie';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'elements.feature-tile', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.phrase': ElementsPhrase;
      'elements.markdown-tile': ElementsMarkdownTile;
      'elements.markdown-content-block': ElementsMarkdownContentBlock;
      'elements.image': ElementsImage;
      'elements.feature-tile': ElementsFeatureTile;
      'elements.feature-image-tile': ElementsFeatureImageTile;
      'elements.banner': ElementsBanner;
      'custom.stage': CustomStage;
      'custom.process': CustomProcess;
      'custom.phrase-block': CustomPhraseBlock;
      'custom.benefit': CustomBenefit;
    }
  }
}
